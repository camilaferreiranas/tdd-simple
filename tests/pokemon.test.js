const { getPokemon } = require('../pokemon');
const { getPokemonMaisPesado } = require('../pokemon');
const {isThisPokemonPikachu} = require('../pokemon')

//jest --init é necessário para inicializar o jest e poder usar o require

describe("PokeAPI Suite", () => {

    describe("Get Pokemons", () => {
        it("Get ditto", async () => {
            const objectPokemon = await getPokemon('ditto');
            expect(objectPokemon.name).toBe('ditto');
        });
    });

    describe("Get Pokemon Mais Pesado", () => {
        it("Get ditto mais leve que dragonite", async () => {
            const pokemonMaisPesado = await getPokemonMaisPesado('ditto', 'dragonite');
            expect(pokemonMaisPesado).toBe('dragonite');
        });
    });

    describe('Verify Pikachu', () => {
        it('should be pikachu', async () => {
            const pikachu = await isThisPokemonPikachu('pikachu');
            expect(pikachu).toBe('pikachu')
        });
        it('shouldn be a pikachu', async () => {
            const ditto = await  isThisPokemonPikachu('ditto');
            expect(ditto).not.toBe('pikachu');
        })
    })

})