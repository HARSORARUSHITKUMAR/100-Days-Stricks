#include <stdio.h>

int main() {
    int n, i, j, hit, count = 0, frame_count;

    printf("Enter The Number Of Frames: ");
    scanf("%d", &frame_count);
    
        int frame[frame_count];
            for (i = 0; i < frame_count; i++) {
                frame[i] = -1;
                }
    printf("Enter The Number Of Page Requests: ");
    scanf("%d", &n);
        
        int pages[n];
            printf("Enter The Page Requests: ");
                for (i = 0; i < n; i++) {
                    scanf("%d", &pages[i]);
                }
    printf("\nRequests");
        for (i = 0; i < frame_count; i++) {
            printf("\tFrame\t%d", i + 1);
        }
    printf("\n");
        for (i = 0; i < n; i++) {
            hit = 0;
                printf("%-19d", pages[i]);
                    for (j = 0; j < frame_count; j++) {
                        if (frame[j] == pages[i]) {
                            hit = 1;
                            break;
                    }
                }
        if (hit == 0) {
            frame[count % frame_count] = pages[i];
            count++;
                for (j = 0; j < frame_count; j++) {
                    if (frame[j] == -1) {
                        printf("%-19s", "-");
                    } else {
                        printf("%-19d", frame[j]);
                    }
                }
            printf("\n");
            } else {
                    for (j = 0; j < frame_count; j++) {
                        if (frame[j] == -1) {
                            printf("%-19s", "-");
                        } else {
                            printf("%-19d", frame[j]);
                        }
                    }
            printf("\n");
            }
        }
    printf("Total Page Faults:\t%d\n", count);
    return 0;
}
