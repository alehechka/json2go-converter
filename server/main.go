package main

import (
	"log"

	"github.com/alehechka/json2go-converter/rest"
)

func main() {
	if err := rest.SetupRouter().Run(); err != nil {
		log.Fatal(err)
	}
}
