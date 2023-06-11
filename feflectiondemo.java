class MyClass {
    public void myMethod() {
        System.out.println("Hello, world!");
    }
}

public class reflectiondemo {
    public static void main(String[] args) throws Exception {
        // Using Class.forName() method
        Class class1 = Class.forName("MyClass");
        MyClass obj1 = (MyClass) class1.newInstance();
        obj1.myMethod();

        // Using getClass() method
        MyClass obj2 = new MyClass();
        Class class2 = obj2.getClass();
        MyClass obj3 = (MyClass) class2.newInstance();
        obj3.myMethod();

        // Using syntax
        MyClass obj4 = new MyClass();
        MyClass obj5 = MyClass.class.newInstance();
        obj4.myMethod();
        obj5.myMethod();
    }
}
