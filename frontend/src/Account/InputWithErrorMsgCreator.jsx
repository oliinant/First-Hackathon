export const InputWithErrorMsgCreator = ({ InputErrorMsgPairHash }) => {

    return (
        <div>
        {Object.entries(InputErrorMsgPairHash).map(([key, ElPair]) => {
            return (
                <div key={key} className="relative">
                    {ElPair.input}
                    {ElPair.errorMsg}
                </div>
            )})}
        </div>
    )
}