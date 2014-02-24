using System;
using System.Collections.Generic;
using System.Linq;

namespace katas
{
    public class Calculator
    {
        public static int Add(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return 0;
            }

            var numbers = ParseInput(input);

            var sum = numbers.Sum();

            return sum;
        }

        private static IEnumerable<int> ParseInput(string input)
        {
            var delimiters = new List<char> {',', '\n'};
            var unparsedNumbers = ParseCustomDelimiter(input, delimiters);

            var numbers = ParseNumbers(unparsedNumbers, delimiters);

            ValidateNumbers(numbers);

            numbers = IgnoreNumbersOver1000(numbers);

            return numbers; 
        }

        private static IEnumerable<int> ParseNumbers(string unparsedNumbers, List<char> delimiters)
        {
            var strNumbers = unparsedNumbers.Split(delimiters.ToArray());
            var numbers = strNumbers.Select(int.Parse);
            return numbers;
        }

        private static IEnumerable<int> IgnoreNumbersOver1000(IEnumerable<int> numbers)
        {
            numbers = numbers.Where(n => n <= 1000);
            return numbers;
        }

        private static void ValidateNumbers(IEnumerable<int> numbers)
        {
            var negatives = numbers.Where(n => n < 0);
            if (negatives.Any())
            {
                throw new ArgumentException(
                    string.Format("negatives not allowed : {0}.", string.Join(",", negatives)));
            }
        }

        private static string ParseCustomDelimiter(string input, List<char> delimiters)
        {
            var unparsedNumbers = input;

            if (input.StartsWith("//"))
            {
                var custom = input.Substring(2).Substring(0, 1);
                delimiters.Add(custom[0]);
                unparsedNumbers = input.Substring(4);
            }

            return unparsedNumbers;
        }
    }
}