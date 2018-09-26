using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xania.CoreUI.Drive
{
    public class FileRepository : IFileRepository
    {
        private readonly IObjectStore<FileMetadata> _metadataRepository;
        private readonly IDocumentStore _documentStore;

        public FileRepository(IObjectStore<FileMetadata> metadataRepository,
            IDocumentStore documentStore)
        {
            _metadataRepository = metadataRepository;
            _documentStore = documentStore;
        }

        public async Task AddAsync(IFile file)
        {
            var metadata = FileMetadata.FromFile(file);
            await _metadataRepository.AddAsync(metadata);
            // await _documentStore.AddAsync(file.Folder, metadata.ResourceId, file.CopyToAsync);
        }

        public IFile Get(string resourceId)
        {
            var qu =
                from f in _metadataRepository
                where f.ResourceId == resourceId
                select f;

            var metadata = qu.FirstOrDefault();
            if (metadata == null)
                return null;

            return new Document(_documentStore)
            {
                ResourceId = metadata.ResourceId,
                Name = metadata.Name,
                ContentType = metadata.ContentType,
                Folder = metadata.Folder
            };
        }

        public IEnumerable<IFile> List(string folder)
        {
            return
                from resourceId in _documentStore.List(folder)
                from metadata in _metadataRepository
                where metadata.ResourceId == resourceId
                select new Document(_documentStore)
                {
                    ResourceId = metadata.ResourceId,
                    Name = metadata.Name,
                    ContentType = metadata.ContentType,
                    Folder = metadata.Folder
                };
        }
    }
}