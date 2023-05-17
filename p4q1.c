#include<stdio.h>
#include<stdlib.h>

#define MAX 5

char stack[MAX];
int top = -1;

int is_full(){
    return top == MAX - 1;
}

int is_empty(){
    return top == - 1;
}
void push(char item){
    if(! is_full()){
        stack[++top] = item;
        printf("item %c has been added to the stack \n",item);
    }
    else {
        printf("ERROR : stack is full \n");
    }
}
char pop(){
    if(! is_empty()){
        return stack[top--];
    }
    else{
        printf("ERROR : stack is empty \n");
        return 0;
    }
}
char peek(){
    if(! is_empty()){
        return stack[top];
    }else{
        printf("ERROR : stack is empty \n");
        return '\0';
    }
}
void change(char item, int position){
    if (position <= top){
        stack[position - 1] = item;
        printf("item %c has been changed to %c \n",stack[position - 1],item);
    }else{
        printf("ERROR : Invalid position \n");
    }
}
void display(){
    int i;
    printf("stack : ");
    for(i = top; i >= 0; i--){
        printf("%c",stack[i]);
    }
    printf("\n");
}
int main(){
    int choice;
    char item;
    int pos;

    while(1){
            printf("1.Push\n");
            printf("2.Pop\n");
            printf("3.Peek\n");
            printf("4.Display");
            printf("5.Change");
            printf("6.Check is full\n");
            printf("7.Check is empty\n");
            printf("8.Exit\n");
            printf("9.enter your choice : ");
            scanf("%d",&choice);

            switch (choice){
                case 1:
                    printf("enter the item : ");
                    scanf("%c",&item);
                    push(item);
                    break;
                case 2:
                    item = pop();
                    printf("item %c has been removed from the stack \n",item);
                    break;
                case 3:
                    item = peek();
                    printf("top item : %c\n",item);
                    break;
                case 4:
                    display();
                    break;
                case 5:
                    printf("enter the item : ");
                    scanf("%c",&item);
                    printf("enter the position : ");
                    scanf("%lc",&pos);
                    change(pos,item);
                    break;
                case 6:
                    if (is_empty())
                        printf("stack is empty \n");
                    else
                        printf("stack is not empty \n");
                    break;
                case 7:
                    if(is_full())
                        printf("stack is full \n");
                    else
                        printf("stack is not empty \n");
                    break;
                case 8:
                    exit(0);
                    break;
                default :
                    printf("nothing \n");
                    break;
            }

    }

}