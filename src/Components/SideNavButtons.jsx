export default function(props) {
    
    return (
        <div className="w-full mt-12 flex flex-col items-center text-gray-500">
            <button className="mt-7 hover:text-blue-300 hover:border-r-blue-400 text-lg border w-full grid place-items-center p-2"><props.icons /></button>
        </div>
    )
}