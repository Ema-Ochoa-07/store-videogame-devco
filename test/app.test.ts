
import { Server } from '../src/presentation/server'
import { main } from '../src/app'
import { envs } from '../src/config/envs'

jest.mock('../src/presentation/server')

describe('Should call server with arguments and start', () => {

    test('Should running server', async () => {
        await main()
        
        expect(Server).toHaveBeenCalled()
    })


})

