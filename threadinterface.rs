use std::thread;
fn main() {
        let t1 = thread::spawn(|| {
            for i in 1..=5 {
                    println!("Thread 1: {}", i);
                    } 
                }
        );
        let t2 = thread::spawn(|| {
                for i in 1..=5 {
                    println!("Thread 2: {}", i);
                 }
              }
            );
        t1.join().unwrap();
        t2.join().unwrap();
}
