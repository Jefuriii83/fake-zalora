import { TextInput, View } from "react-native"

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name? : string;
}

const SearchField = ({name, className, children, ...props}: SearchProps) => {
    return(
             <TextInput 
                className="border-black"
                placeholder=""

             />
    )
}

export default SearchField;