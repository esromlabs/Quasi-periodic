// You have a turtle named 'yurt' at the ready.
function t (s) {
  yurt.pd();
  // decorate with an arc that indicates the orientation of the rhombus
  yurt.lt(2 * 36);
  yurt.arc 4 * 36 :s * 0.618034 / 2
  yurt.rt 2 * 36);

  yurt.rt 2 * 36);
  yurt.fd(s);
  yurt.lt(4 * 36);
  yurt.fd(s);
  yurt.lt(1 * 36);
  yurt.fd(s);
  yurt.lt(4 * 36);
  yurt.fd(s);
  yurt.lt(1 * 36);
  yurt.lt(2 * 36);
  yurt.pu();
}

function w (s) {
  yurt.pd();
  // decorate with an arc that indicates the orientation of the rhombus
  lt 1 * 36
  arc 2 * 36 :s * 0.618034
  rt 1 * 36

  rt 1 * 36
  yurt.fd(s);
  yurt.lt(2 * 36
  yurt.fd(s);
  yurt.lt(3 * 36);
  yurt.fd(s);
  yurt.lt(2 * 36);
  yurt.fd(s);
  yurt.lt(3 * 36);
  yurt.lt(1 * 36);
  penup
END

// generate rotation scale kind recursion_depth paint_all_levels
TO gen :s :k :depth :paint_at_level
  ifelse :depth < 1 [
    setcolor :depth
    if :k = 't' [
      t :s
    ]
    if :k = 'w' [
      w :s
    ]
  ] [
    localmake "dep :depth - 1
    localmake "scale :s * 0.618034

    if :k = 't' [
      // generate a t and w
      // first the t
      fd :scale
      rt 3 * 36
      setcolor :depth
      if :paint_at_level >= :depth [
        t :scale
      ]
      gen :scale 't' :dep :paint_at_level

      lt 2 * 36
      fd :scale
      rt 3 * 36
      setcolor :depth
      if :paint_at_level >= :depth [
        w :scale
      ]
      gen :scale 'w' :dep :paint_at_level

      rt 1 * 36
      fd :scale
      rt 1 * 36
      fd :scale

      rt 4 * 36
    ]
    if :k = 'w' [
      // w -> w t w
      // first generate w
      rt 2 * 36
      fd :s
      rt 5 * 36
      setcolor :depth
      if :paint_at_level >= :depth [
        w :scale
      ]
      gen :scale 'w' :dep :paint_at_level


      rt 2 * 36
      fd :scale
      lt 3 * 36
      setcolor :depth
      if :paint_at_level >= :depth [
        t :scale
      ]
      gen :scale 't' :dep :paint_at_level

      // last another w

      rt 2 * 36
      fd :scale
      rt 2 * 36
      fd :scale
      rt 4 * 36
      setcolor :depth
      if :paint_at_level >= :depth [
        w :scale
      ]
      gen :scale 'w' :dep :paint_at_level
      rt 1 * 36
      fd :s * 1.618034
      lt 5 * 36
    ]
  ]
END

clearscreen
penup
setcolor "brown
fd -120
lt 90
fd 250
rt 90

rt 1 * 36
// level one test of 't'
t 200
gen 200 't' 6 2
lt 1 * 36


rt 90
fd 420
lt 90

// level one test of 'w'
w( 200);
gen( 200, 'w', 6, 2);
