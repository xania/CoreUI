using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace Xania.CoreUI.Logging
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly IHubContext<LoggerHub> _logHub;

        public LogController(IHubContext<LoggerHub> logHub)
        {
            _logHub = logHub;
        }

        [HttpPost]
        [Route("info")]
        public Task Info([FromBody] string message)
        {
            return _logHub.Clients.All.SendAsync("serverInfo", message);
        }

        [HttpPost]
        [Route("debug")]
        public Task Debug([FromBody] string message)
        {
            return _logHub.Clients.All.SendAsync("serverDebug", message);
        }
        [HttpPost]
        [Route("error")]
        public Task Error([FromBody] ClientError error)
        {
            return _logHub.Clients.All.SendAsync("serverError", error);
        }
        [HttpPost]
        [Route("warn")]
        public Task Warn([FromBody] string message)
        {
            return _logHub.Clients.All.SendAsync("serverWarn", message);
        }
    }
}