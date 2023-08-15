import React from 'react'
import "./Blog.scss"
import { blog } from '../../../dummydata'

export const Blog = ({page}) => {
  let count = 0;
  if(page === "Home"){
    count = 3;
  }else{
    count = 6;
  }
  return (
    <div className="blogContainer">
        {page === "Home"  && (
          <div className="blogTitle">
          <h3>OUR BLOG</h3>
          <h1>Recent From Blog</h1>
      </div>
        )}
        <div className="blogs">
         {blog.slice(0,count).map((blog)=>{
            return(
                <div className="blog" key={blog.id}>
                    <div className="blogImage">
                        <img src={blog.cover} alt="" />
                    </div>
                    <div className='blogText'>
                    <div className='iconBar'>
                      <div className="detailIcon">
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{blog.type}</label>
                      </div>
                      <div className="detailIcon">
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{blog.date}</label>
                      </div>
                      <div className="detailIcon">
                      <i className='fa fa-comments'></i>
                      <label htmlFor='' className='com'>{blog.com}</label>
                      </div>
                
                  </div>
                <div className="text">
                <h1>{blog.title}</h1>
                  <p>{blog.desc}</p>
                </div>
                
                </div>
                </div>
            )
         })}
        </div>
    </div>
  )
}
