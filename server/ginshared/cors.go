package ginshared

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// CorsConfigMiddleware is a middleware function that establishes CORS configuration
func CorsConfigMiddleware(c *gin.Context) {
	config := cors.DefaultConfig()

	config.AllowCredentials = true

	config = corsOrigin(c, config)

	cors.New(config)(c)
}

func corsOrigin(c *gin.Context, config cors.Config) cors.Config {
	origin := c.GetHeader("Origin")

	if len(origin) > 0 {
		config.AllowOrigins = append(config.AllowOrigins, origin)
	} else {
		config.AllowAllOrigins = true
	}

	return config
}
