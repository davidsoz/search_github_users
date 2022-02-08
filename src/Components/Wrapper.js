

function Wrapper({children}) {
    return (
        <div className="bg-red-200 p-11 text-center m-auto font-bold">
            {children}
        </div>
    )
}

export default Wrapper;