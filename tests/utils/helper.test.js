import helper from "../../src/utils/helper"

describe("Teste da função para deixar a primeira letra da string maiuscula", () => {
    it("Deve retornar a string com a primeira letra maiuscula quando a primeira letra for minuscula", () => {
        const str = "bulbasaur"
        const expectedStr = "Bulbasaur"
        expect(helper.makeFirstLetterUpperCase(str)).toBe(expectedStr)
    })

    it("Deve retornar a string com a primeira letra maiuscula quando a primeira letra for maiscula", () => {
        const str = "Bulbasaur"
        const expectedStr = "Bulbasaur"
        expect(helper.makeFirstLetterUpperCase(str)).toBe(expectedStr )
    })
})