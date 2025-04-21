package main

import (
	"fmt"
	"regexp"
	"strings"
)

func CountFreq(sentence string) map[string]int {
	re := regexp.MustCompile(`[^\w]+`)
	sentence = re.ReplaceAllString(sentence, " ")

	senSlice := strings.Split(sentence, " ")
	result := make(map[string]int)
	for _, val := range senSlice {
		val = strings.ToLower(val)
		result[val] += 1
	}

	return result
}

func main() {
	fmt.Println(CountFreq("Four, One two two three Three three four four four"))

}
