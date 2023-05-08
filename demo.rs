use std::io;

fn main() {
    println!("Enter the first number:");
    let mut num1 = String::new();
    io::stdin().read_line(&mut num1).unwrap();
    let num1: i32 = num1.trim().parse().unwrap();

    println!("Enter the second number:");
    let mut num2 = String::new();
    io::stdin().read_line(&mut num2).unwrap();
    let num2: i32 = num2.trim().parse().unwrap();

    let sum = num1 + num2;
    println!("The sum of : {}",sum);
}
