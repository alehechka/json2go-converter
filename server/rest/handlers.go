package rest

import (
	"net/http"

	"github.com/alehechka/json2go-converter/ginshared"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	engine := gin.Default()
	engine.Use(ginshared.CorsConfigMiddleware)

	RegisterHandlers(engine)

	return engine
}

func RegisterHandlers(engine *gin.Engine) {
	engine.StaticFS("/", http.Dir("client"))

	router := engine.Group("/api")

	router.POST("/generate", build)
}
