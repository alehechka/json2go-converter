package ginshared

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Error represents the Error object structure
type Error struct {
	Status int    `json:"status"`
	Title  string `json:"title"`
	Detail string `json:"detail"`
}

// ShouldAbortWithError takes a status and array of errors and will abort if any errors are non-nil.
// Bool return value indicates whether or not to short-circuit
func ShouldAbortWithError(c *gin.Context) func(status int, errs ...error) bool {
	return func(status int, errs ...error) bool {
		var errors []Error

		for _, err := range errs {
			if err != nil {
				c.Error(err)
				errors = append(errors, Error{
					Status: status,
					Title:  http.StatusText(status),
					Detail: err.Error(),
				})
			}
		}

		if len(errors) > 0 {
			c.AbortWithStatusJSON(status, gin.H{
				"errors": errors,
			})
			return true
		}

		c.Next()
		return false
	}
}
