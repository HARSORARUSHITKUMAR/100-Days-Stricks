trait Greeting {
    fn greet(&self);
    }
struct Person {
        name: String,
        }
        impl Greeting for Person {
                fn greet(&self) {
                        println!("Hello, my name is {}!",self.name); 
                    }
    }
fn main() {
        let person = Person { name: String::from("Harsora") };
            person.greet();
 }

