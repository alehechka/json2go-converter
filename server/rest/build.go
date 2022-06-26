package rest

import (
	"fmt"
	"net/http"

	"github.com/alehechka/json2go-converter/ginshared"
	"github.com/alehechka/json2go/gen"
	"github.com/gin-gonic/gin"
)

func build(c *gin.Context) {
	packageName := c.DefaultQuery("packageName", gen.DefaultPackage)

	rootName := c.DefaultQuery("root", gen.DefaultRootName)

	outputFileName := c.DefaultQuery("outputFile", gen.DefaultOutputFile)

	types, err := gen.New().ReadBytes(c.Request.Body).Build(&gen.Config{
		RootName:       rootName,
		PackageName:    packageName,
		OutputFileName: outputFileName,
	})

	if ginshared.ShouldAbortWithError(c)(http.StatusBadRequest, err) {
		return
	}

	c.Header("Content-Disposition", fmt.Sprintf(`attachment; filename="%s"`, outputFileName))
	c.Data(http.StatusOK, "text/go; charset=utf-8", []byte(types))
}
