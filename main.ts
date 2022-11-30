import {GenericContainer} from 'testcontainers'

async function main() {
  const container = await new GenericContainer('mongo:5').start()
  await container.stop()
}

main()
