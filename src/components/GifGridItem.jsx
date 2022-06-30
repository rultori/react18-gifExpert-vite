
export const GifGridItem = ( { title, url } ) => {

  return (
   <div className="card">
      <img src={url} alt={title} />
      <p>{ (title === ' ') ? 'Sin titulo' : title }</p>
   </div>
    
  )
}


