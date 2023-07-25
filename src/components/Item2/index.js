import './index.css'

const Item2=(props)=>{
    const {data}=props;
    const {url,id}=data;
    return(
        <div class="owl-item cloned">
            <div class="service-slide "  data-tilt-speed="1000">
			<div class="service-card-hh">
				<div class="image-sr-mm image-sr-mm1">
					<img alt="custom-sport" src={url} class="img" />
				</div>
				
			</div>
		</div></div>
    )
}

export default Item2