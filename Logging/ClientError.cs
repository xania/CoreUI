using System;

namespace Xania.CoreUI.Logging
{
    public class ClientError
    {
        public string Message { get; set; }
        public int LineNumber { get; set; }
        public int ColNumber { get; set; }
        public string Url { get; set; }
        public DateTimeOffset Date { get; set; }
    }
}