import './index.css'

const Item=(props)=>{
    const {data}=props;
    const {name,url,name2,id}=data;
    return(
        <li className={`item ite${id}`}>
            <img src={url} />
            <div className='coursename'>
            <span className='name'>{name}</span><br/>
            <span className='name1'>{name2}</span>
            </div>
            
        </li>
    )
}

export default Item