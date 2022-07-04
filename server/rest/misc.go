package rest

import (
	"net/http"

	"github.com/alehechka/json2go"
	"github.com/alehechka/json2go/gen"
	"github.com/alehechka/json2go/utils"
	"github.com/gin-gonic/gin"
)

func getVersion(ctx *gin.Context) {
	ctx.Data(http.StatusOK, "text/plain", []byte(json2go.Version))
}

func getTimeFormats(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"formats": utils.TimeFormatMap,
	})
}

func getDefaults(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"packageName":  gen.DefaultPackage,
		"root":         gen.DefaultRootName,
		"outputFile":   gen.DefaultOutputFile,
		"timeFormat":   gen.DefaultTimeFormat,
		"alphabetical": "false",
		"omitempty":    "false",
	})
}
