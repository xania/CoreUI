using System;
using System.IO;

namespace Xania.CoreUI.Drive
{
    public interface IOutputStream
    {
        string Name { get; }
        string ContentType { get; }
        Guid ResourceId { get; }
        void Read(Action<Stream> reader);
    }
}