import React from "react"
import ContentLoader from "react-content-loader"

export default function Skeleton(props){
  
  <ContentLoader 
    speed={2}
    width={470}
    height={470}
    viewBox="0 0 470 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#c4c4c4"
    {...props}
  >
    <rect x="1" y="156" rx="3" ry="3" width="120" height="120" /> 
    <rect x="275" y="155" rx="3" ry="3" width="120" height="120" /> 
    <rect x="137" y="156" rx="3" ry="3" width="120" height="120" /> 
    <rect x="1" y="291" rx="3" ry="3" width="395" height="18" /> 
    <rect x="4" y="0" rx="3" ry="3" width="395" height="140" />
  </ContentLoader>
}

