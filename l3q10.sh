a=$1
b=$2
    echo "no 1 =$a"
    echo "no 2 =$b"

    c=`expr $a + $b`
    echo "addition is =$c"
    c=`expr $a - $b`
    echo "subtraction is =$c"
    c=`expr $a \* $b`
    echo "multiplication is =$c"
    c=`expr $a / $b` 
    echo "division is =$c"