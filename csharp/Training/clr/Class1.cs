using System;
using calc;

namespace clr
{
    public class Class1
    {
        private static void Main()
        {
            //var url = "http://www.pluralsight.com";
            //var uri = new Uri(url);

            //Console.WriteLine(url.GetType().Assembly.FullName);
            //Console.WriteLine(uri.GetType().Assembly.FullName);
            //Console.WriteLine(typeof (Class1).Assembly.FullName);
            //Console.WriteLine(typeof (Class1).AssemblyQualifiedName);
            //Console.ReadLine();
            Console.WriteLine(typeof(Calc).Assembly.CodeBase);

            Console.ReadLine();
        }
    }
}