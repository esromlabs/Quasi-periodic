import Color exposing (..)
import Graphics.Collage exposing (..)
import Graphics.Element exposing (..)
import Time exposing (..)



main =
  Signal.map render (every 80)

  

render t =
  collage 500 500
    (gen 6 "f" 0.0 0.0 ((inSeconds t)*30.0) 70.0)


clearGrey : Color
clearGrey =
  rgba 111 111 111 0.4
  
gen: Int -> String -> Float -> Float -> Float -> Float -> List (Form)
gen level kind x y rot scale =
  if level == 0 then
    ([pentagon x y rot scale])
  else
    if kind == "f" then
      (pentagon x y rot scale :: 
        List.append (gen (level-1) "f" (x-scale) (y+scale) (rot+36.0) (scale * -0.618033))
        (gen (level-1) "t" (x+scale) (y+scale) (rot+36.0) (scale * -0.618033)))
    else
      (pentagon x y rot scale :: 
        gen (level-1) "f" (x+scale) (y-scale) (rot-36.0) (scale * -0.618033))
      
    
pentagon : Float -> Float -> Float ->  Float -> Form
pentagon x y r s = 
  ngon 5 s
        |> filled clearGrey
        |> rotate (degrees r)
        |> move (x, y)
