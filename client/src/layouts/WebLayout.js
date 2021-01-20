const WebLayout = ({children})=>{
    return (
        <div>
            <h1>header</h1>
                <div>{children}</div>
            <h1>Footer</h1>
        </div>
    )
}

export default WebLayout;