export default interface Command {
    name: string
    description: string
    invoke: Function
}