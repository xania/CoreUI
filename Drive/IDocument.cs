using System.IO;

namespace Xania.CoreUI.Drive
{
    public interface IDocument
    {
        Stream OpenWrite();
    }
}