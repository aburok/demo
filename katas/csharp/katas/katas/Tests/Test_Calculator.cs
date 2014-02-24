using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace katas.Tests
{
    [TestFixture]
    public class Test_Calculator
    {
        [Test]
        public void Add_EmptyString_0()
        {
            //ACT
            var sum = Calculator.Add("");

            //ASSERT
            Assert.AreEqual(0, sum);
        }

        [Test]
        public void Add_SingleNumber_Correct()
        {
            //ACT
            var sum = Calculator.Add("1");

            Assert.AreEqual(1, sum);
        }

        [Test]
        public void Add_TwoNumbers_Correct()
        {
            var sum = Calculator.Add("1,2");

            Assert.AreEqual(3, sum);
        }

        [Test]
        public void Add_UnknownAmountOfNumbers_Correct()
        {
            var sum = Calculator.Add("1,2,3,4,5,6,7,8,9,10,11,12");

            Assert.AreEqual(78, sum);
        }

        [Test]
        public void Add_EnableNewLineAsDelimiter_Correct()
        {
            var sum = Calculator.Add("1\n2,3");

            Assert.AreEqual(6, sum);
        }

        [Test]
        public void Add_SupportCustomDelimiters_Correct()
        {
            var sum = Calculator.Add("//;\n1,2\n3");

            Assert.AreEqual(6, sum);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException), ExpectedMessage = "negatives not allowed : -1,-3.")]
        public void Add_NegativeNumbersNotAllowd_ThrowException()
        {
            Calculator.Add("-1,2,-3\n4");
        }

        [Test]
        [ExpectedException(typeof (ArgumentException), ExpectedMessage = "negatives not allowed : -1,-3.")]
        public void AddWithCustomDelimiter_NegativeNumbersNotAllowed_ThrowException()
        {
            Calculator.Add("//;\n-1\n2;-3");
        }

        [Test]
        public void Add_IgnorenumbersBiggerThan1000_Correct()
        {
            var sum = Calculator.Add("1,1000,1001");

            Assert.AreEqual(1001, sum);
        }

        [Test]
        public void Add_CustomDelimitersCanHaveAnylength_Correct()
        {
            var sum = Calculator.Add("//[***]\n1***2***3");

            Assert.AreEqual(6, sum);
        }

        [Test]
        public void Add_CustomDelimitersCanHaveAnylengthMixedDelimiters_Correct()
        {
            var sum = Calculator.Add("//[***]\n1***2***3,4\n5");

            Assert.AreEqual(15, sum);
        }

        [Test]
        public void Add_MultipleCustomDelimiters_Correct()
        {
            var sum = Calculator.Add("//[***][;][%%]\n1***2;3%%4\n5");

            Assert.AreEqual(15, sum);

        }
    }
}
