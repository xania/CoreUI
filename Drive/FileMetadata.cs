using System.ComponentModel.DataAnnotations;

namespace Xania.CoreUI.Drive
{
    public class FileMetadata
    {
        [Key]
        public string ResourceId { get; set; }
        public string Name { get; set; }
        public string ContentType { get; set; }
        public string Folder { get; set; }

        public static FileMetadata FromFile(IFile file)
        {
            return new FileMetadata
            {
                Name = file.Name,
                ContentType = file.ContentType,
                ResourceId = file.ResourceId,
                Folder = file.Folder
            };
        }
    }
}