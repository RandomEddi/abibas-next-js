import React from "react"

const Size = (props) => {
  const selected = !props.disabled && props.selectedSize
  let classes
  classes = selected ? "size selected" : "size"
  classes = props.disabled ? "size disabled" : classes
  const sizeHandler = () => {
    if (props.disabled) return
    if (props.selectedSize) {
      props.onSelect(null)
    } else {
      props.onSelect(props.children)}
    }
  return (
    <>
      <button onClick={sizeHandler} className={classes} disabled={props.disabled}>{props.children}</button>
      <style jsx>
        {`
        .size {
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          color: black;
          background: white;
          border: 1px solid black;
          border-radius: 15px;
          box-shadow: 0 0 5px rgba(0,0,0, .3);
          padding: 5px 10px;
        }
        
        .size:disabled {
          box-shadow: unset;
          opacity: .4;
          cursor: unset;
          background: gray;
        }
        
        .selected {
          color: white;
          background: black;
        }
        `}
      </style>
    </>
  )
}

export default React.memo(Size)