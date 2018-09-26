using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Xania.CoreUI.Drive
{
    public class GenericFile : FileBase
    {
        private readonly Func<Stream, CancellationToken, Task> _copyToAsync;

        public GenericFile(Func<Stream, CancellationToken, Task> copyToAsync)
        {
            _copyToAsync = copyToAsync;
        }

        public override Task CopyToAsync(Stream output, CancellationToken cancellationToken)
        {
            return _copyToAsync(output, cancellationToken);
        }
    }
}