using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Xania.CoreUI.Drive
{
    [Route("drive/file")]
    public class FileController : ControllerBase
    {
        private readonly IFileRepository _fileRepository;

        public FileController(IFileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }


        [HttpPost]
        [Route("{*folder}")]
        public async Task<IActionResult> Upload(string folder, List<IFormFile> files)
        {
            var resources = new List<string>();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var resourceId = Guid.NewGuid().ToString();
                    resources.Add(resourceId);

                    await _fileRepository.AddAsync(new GenericFile(formFile.CopyToAsync)
                    {
                        Folder = folder,
                        ContentType = formFile.ContentType,
                        Name = formFile.FileName,
                        ResourceId = resourceId
                    });
                }
            }

            return Created(Url.Content("~/drive/file"), resources);
        }

        [HttpGet]
        [Route("download/{resourceId}")]
        public HttpResponseMessage Get(string resourceId)
        {
            var file = _fileRepository.Get(resourceId);
            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new HttpFileContent(file)
            };
        }

        [HttpGet]
        [Route("{*folder}")]
        public IActionResult List(string folder)
        {
            var files =
                from file in _fileRepository.List(folder)
                select new FileViewModel
                {
                    ResourceId = file.ResourceId,
                    Name = file.Name,
                    Url = Url.Content("~/drive/file/download/" + file.ResourceId)
                };
            return Ok(files);
        }
    }

    public class HttpFileContent : HttpContent
    {
        private readonly IFile _file;

        public HttpFileContent(IFile file)
        {
            _file = file;
            Headers.ContentType = new MediaTypeHeaderValue(file.ContentType);
        }

        protected override Task SerializeToStreamAsync(Stream stream, TransportContext context)
        {
            return _file.CopyToAsync(stream);
        }

        protected override bool TryComputeLength(out long length)
        {
            length = 0;
            return false;
        }
    }
    public class FileViewModel
    {
        public string ResourceId { get; set; }
        public string Url { get; set; }
        public string Name { get; set; }
    }
}