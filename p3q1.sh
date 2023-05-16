if [ $# -eq 0 ];
then 
    echo "\n enter filename to count words"
    read file
    echo "total words in file $file = "
    wc -w $file
else
    echo "total words="
    wc -w $1
fi