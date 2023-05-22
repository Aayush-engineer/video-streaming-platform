
import { PlayArrow , InfoOutlined } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
          <div className="category">
            <span>{ type === "movie" ?  "movies":"series"}</span>
            <select name="genre" id="genre">
              <option >Genre</option>
              <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>

            </select>
          </div>
        )}





        <img src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />

        <div className="info">
          {/* <img src="https://images8.alphacoders.com/523/thumb-1920-523120.jpg" alt="" /> */}
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis fuga, laborum ullam voluptates, ut tempora in expedita eius beatae asperiores labore ratione officiis laboriosam, doloribus repudiandae? Exercitationem, corrupti dolorum.
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow/>
              <span>play</span>

            </button>
            <button className="more">
              <InfoOutlined/>
              <span>info</span>
            </button>
            
          </div>
        </div>
      
    </div>
  )
}
