using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Xania.CoreUI.Drive
{
    public interface IObjectStore<TModel> : IEnumerable<TModel>
    {
        Task<TModel> AddAsync(TModel model);

        Task DeleteAsync(Expression<Func<TModel, bool>> condition);
        Task UpdateAsync(TModel model);
    }
}