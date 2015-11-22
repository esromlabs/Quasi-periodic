import Color exposing (..)
import Graphics.Collage exposing (..)
import Graphics.Element exposing (..)


main : Element
main =
  collage 300 300
    (gen 3 "f" 0.0 0.0 90.0 100.0)


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
        List.append (gen (level-1) "f" (x+scale) (y+scale) (rot+36.0) (scale * -0.6018))
        (gen (level-1) "f" (x+scale) (y+scale) (rot+72.0) (scale * -0.6018)))
    else
      (pentagon x y rot scale :: 
        gen (level-1) "f" (x+scale) (y+scale) (rot+72.0) (scale * -0.6018))
      
    
pentagon : Float -> Float -> Float ->  Float -> Form
pentagon x y r s = 
  ngon 5 s
        |> filled clearGrey
        |> rotate (degrees r)
        |> move (x, y)
