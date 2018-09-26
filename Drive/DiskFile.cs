using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Xania.CoreUI.Drive
{
    public class DiskFile : FileBase
    {
        private readonly string _filePath;

        public DiskFile(string filePath)
        {
            _filePath = filePath;
        }

        public override Task CopyToAsync(Stream output, CancellationToken cancellationToken)
        {
            using (var stream = File.OpenRead(_filePath))
            {
                stream.CopyTo(output);
                output.Flush();
            }

            return Task.CompletedTask;
        }
    }
}