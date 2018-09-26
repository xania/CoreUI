using System.IO;

namespace Xania.CoreUI.Drive
{
    public class DiskDocument : IDocument
    {
        private readonly string _filePath;

        public DiskDocument(string filePath)
        {
            _filePath = filePath;
        }

        public Stream OpenWrite()
        {
            return File.OpenWrite(_filePath);
        }
    }
}