package rest

import (
	"github.com/alehechka/json2go-converter/ginshared"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	engine := gin.Default()
	engine.Use(ginshared.CorsConfigMiddleware)

	RegisterHandlers(engine)

	return engine
}

func RegisterHandlers(engine *gin.Engine) {
	engine.Use(static.Serve("/", static.LocalFile("client", true)))

	router := engine.Group("/api")

	router.POST("/generate", build)
	router.GET("/version", getVersion)
	router.GET("/time-formats", getTimeFormats)
	router.GET("/defaults", getDefaults)
}
