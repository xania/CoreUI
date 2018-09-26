using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Xania.CoreUI.Drive
{
    public class Document : FileBase
    {
        private readonly IDocumentStore _documentStore;

        public Document(IDocumentStore documentStore)
        {
            _documentStore = documentStore;
        }

        public override Task CopyToAsync(Stream output, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
            // return _documentStore.ReadAsync(Folder, ResourceId, s => s.CopyTo(output));
        }
    }
}