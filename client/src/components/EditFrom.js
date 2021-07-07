import { axiosWithAuth } from "./axiosWithAuth";

const initialItem = {
    color: '',
    code: '',
    id: null
};

const EditForm = props => {    
    const [color, setColor] = useState();

    const { match, colors } = props;
    useEffect(() => {
        const id = match.params.id;
        const colorToUpdate = colors.find(color => `${color.id}` === id)
        if(colorToUpdate) {
            console.log(colorToUpdate);
            setColor(colorToUpdate);
        }
    }, [match, colors])

    const handlChanger = event => {
        event.persist();
        setColor({
            ...color,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/colors.${id}`)
        .then(res => {
            props.history.push
        })
    } 
    return (
        <div>
            <form>
                <input 
                type='text'
                name='idk yet'
                />
            </form>
        </div>
    )
}