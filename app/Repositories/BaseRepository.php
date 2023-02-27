<?php

namespace App\Repositories;

use App\Interfaces\Repositories\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository implements BaseRepositoryInterface
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id): ?Model
    {
        return $this->model->find($id);
    }

    public function create(array $data): Model
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->find($id)->update($data);
    }

    public function updateArray($ids, $data)
    {
        return $this->model->whereIn('id', $ids)->update($data);
    }

    public function updateByField($field, $fieldValue, $data)
    {
        return $this->model->where($field, $fieldValue)->update($data);
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    public function paginate($rows)
    {
        return $this->model->paginate($rows);
    }

}
