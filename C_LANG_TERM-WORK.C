#include <stdio.h>
#include<stdlib.h>

#define MAX_SIZE 100

int queue[MAX_SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == MAX_SIZE - 1) {
        printf("Queue overflow!\n");
        return;
    }
    if (front == -1) {
        front = 0;
    }
    rear++;
    queue[rear] = value;
}

void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue underflow!\n");
        return;
    }
    printf("Dequeued: %d\n", queue[front]);
    front++;
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    dequeue();
    enqueue(40);
    dequeue();
    dequeue();
    dequeue();
    dequeue();
    return 0;
}
